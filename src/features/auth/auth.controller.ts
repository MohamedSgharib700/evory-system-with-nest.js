import { Controller, Post,Get,  Req, Res, Query,  UseGuards } from '@nestjs/common';
import { Response } from 'express';                             
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('saml-login')
  @UseGuards(AuthGuard('saml'))
  samlLogin(@Query('email') email: string, @Res() res: Response) {
    // Construct the RelayState parameter with the email
    const relayState = JSON.stringify({ email });

    // Redirect the user to the SAML Identity Provider with RelayState
    res.redirect(`/auth/saml/callback?RelayState=${encodeURIComponent(relayState)}`);
  }

  @Get('saml/callback')
  @UseGuards(AuthGuard('saml'))
  samlLoginCallback(@Req() req) {
    // Access the user profile and RelayState (which contains the email)
    const user = req.user;
    const relayState = req.query.RelayState ? JSON.parse(decodeURIComponent(req.query.RelayState)) : null;
    const email = relayState ? relayState.email : null;

    // Handle the email and user profile as needed
    return { user, email };
  }
}