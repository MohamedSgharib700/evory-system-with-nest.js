import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile, SamlConfig } from 'passport-saml';
import * as xmljs from 'xml-js';

@Injectable()
export class SamlStrategy extends PassportStrategy(Strategy, 'saml') {
  constructor() {
    // The XML string embedded directly in the code 
    const xmlString = `
      <?xml version="1.0" encoding="utf-8"?>
      <EntityDescriptor ID="process.env.appId" entityID="https://sts.windows.net/process.env.tenant_id" xmlns="urn:oasis:names:tc:SAML:2.0:metadata">
        <!-- Your XML content here -->
        <IDPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
          <KeyDescriptor use="signing">
            <KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#">
              <X509Data>
                <X509Certificate>process.env.certificate</X509Certificate>
              </X509Data>
            </KeyInfo>
          </KeyDescriptor>
        </IDPSSODescriptor>
      </EntityDescriptor>
    `;

    // Parse the XML string
    const parsedXml = xmljs.xml2js(xmlString, { compact: true });

    // Extract the certificate
    const certificate = parsedXml['EntityDescriptor']['IDPSSODescriptor']
      ['KeyDescriptor']['KeyInfo']['X509Data']['X509Certificate']._text.trim();

    if (!certificate) {
      throw new Error('Certificate not found in XML');
    }

    const samlConfig: SamlConfig = {
      callbackUrl: 'process.env.callbackUrl', // login page 
      entryPoint:  'process.env.entryPoint', // url from azure portal in our application
      issuer:      'process.env.issuer', // home page after auth
      cert: certificate,
    };

    super(samlConfig);
  }

  async validate(profile: Profile): Promise<any> {
    return profile;
  }
}
