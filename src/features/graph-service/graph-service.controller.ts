import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller('graph-service')
export class GraphServiceController {
//   @Get('get-token')
//   async getToken(@Req() req, @Res() res ) {
//     const apiUrl = `https://login.microsoftonline.com/${process.env.tenant_id}/oauth2/v2.0/token`;
//     const headers = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     };

//     const requestBody = new URLSearchParams();
//     requestBody.append('client_id', process.env.client_id);
//     requestBody.append('grant_type', process.env.grant_type);
//     requestBody.append('client_secret', process.env.client_secret);
//     requestBody.append('scope', process.env.scope);

//     const requestOptions: RequestInit = {
//       method: 'POST',
//       headers: headers,
//       body: requestBody.toString(),
//       redirect: 'follow',
//     };

//     try {
//       const response = await fetch(apiUrl, requestOptions);
//       const data = await response.json();
//       return res.json({ data });
//     } catch (error) {
//       console.log('error', error);
//       res.status(500).json({ error: 'Failed to fetch access token' });
//     }

//   }

  @Get()
  async getOnlyToken(@Req() req, @Res() res ) {
    const apiUrl = `https://login.microsoftonline.com/${process.env.tenant_id}/oauth2/v2.0/token`;
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const requestBody = new URLSearchParams();
    requestBody.append('client_id', process.env.client_id);
    requestBody.append('grant_type', process.env.grant_type);
    requestBody.append('client_secret', process.env.client_secret);
    requestBody.append('scope', process.env.scope);

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: headers,
      body: requestBody.toString(),
      redirect: 'follow',
    };

   const response :Response = await fetch(apiUrl,requestOptions);
   const data = await response.json();
   return data.access_token
  }

  @Get("get-timelines")
  async getTimelines(@Req() req, @Res() res ) {
    const apiUrl = `https://api.twitter.com/2/users/process.env.xUserID/tweets`;
    const token = await this.getOnlyToken(req , res);
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    console.log("Get basic url :" , apiUrl);
  
    const requestBody = new URLSearchParams();
    requestBody.append('api_key', 'process.env.api_key');
    requestBody.append('api_key_secret', 'process.env.api_key_secret');
    
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: headers,
      body: requestBody.toString(),
      redirect: 'follow',
    };

   const response :Response = await fetch(apiUrl,requestOptions);
   const data = await response.json();
   return data
  }

  //Get Mails endpoint
  @Get('get-mails')
  async getMails(@Req() req, @Res() res) {
    const email = 'test-integration@gmail.com'; 

    try {
      const token = await this.getOnlyToken(req , res);
      const apiUrl = `https://graph.microsoft.com/v1.0/users/${email}/messages`;
      // console.log(token);

      const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        const unreadEmails = data.value.filter(email => !email.isRead).map(({ id , subject, sender, webLink , createdDateTime}) => ({
            id,
            subject,
            sender: sender.emailAddress.name,
            webLink,
            createdDateTime
          }));
        const expires_in = token.expires_in ;
        
        // console.log(expires_in);

        res.status(200).json({ unreadEmails});
        
      } else {
        throw new Error('Failed to fetch emails');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch emails' });
    }
  }

  @Get('get-profile')
  async getProfile(@Req() req, @Res() res) {
    const email = 'test-integration@gmail.com'; 

    try {
      const token = await this.getOnlyToken(req , res);
      const apiUrl = `https://graph.microsoft.com/v1.0/users/${email}`;
      // console.log(token);

      const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        const userProfile = {
          id: data.id,
          businessPhones: data.businessPhones,
          displayName: data.displayName,
          givenName: data.givenName,
          jobTitle: data.jobTitle,
          mail: data.mail,
          mobilePhone: data.mobilePhone,
          preferredLanguage: data.preferredLanguage,
          surname: data.surname
        };
        
        // console.log(expires_in);

        res.status(200).json({  employee_profile: userProfile });
        
      } else {
        throw new Error('Failed to fetch profile');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch profile' });
    }
  }

  @Get('get-todo')
  async getToDo(@Req() req, @Res() res) {
    const email = 'test-integration@gmail.com'; 

    try {
      const token = await this.getOnlyToken(req , res);
      const apiUrl = `https://graph.microsoft.com/v1.0/users/${email}/todo/lists`;
      // console.log(token);

      const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        const toDoList = {
          list: data.value,
        };
          
        const expires_in = token.expires_in ;
        
        // console.log(expires_in);

        res.status(200).json({ toDoList });
        
      } else {
        throw new Error('Failed to fetch to do list');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch to do list' });
    }
  }

  @Get('get-calendr')
async getCalendr(@Req() req, @Res() res) {
  const email = 'test-integration@gmail.com';

  try {
    const token = await this.getOnlyToken(req, res);
    const apiUrl = `https://graph.microsoft.com/v1.0/users/${email}/events`;
    // console.log(token);

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    });

    if (response.ok) {
      const data = await response.json();
      const calendrs = data.value.map(({ subject, attendees, webLink, start, end }) => ({
        subject,
        sender: attendees[0].emailAddress.name,
        start_date: start.dateTime,
        end_date: end.dateTime,
        webLink,
      }));

      calendrs.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());
      
      const nextEvent = calendrs[0];
      res.status(200).json({ nextEvent });
    } else {
      throw new Error('Failed To Fetch Meeting ');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed To Fetch Meeting' });
  }
}
   
}