import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LangMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const acceptLanguage = req.headers['accept-language'] || 'ar';
    const supportedLanguages = ['en', 'ar'];
    const language = supportedLanguages.includes(acceptLanguage) ? acceptLanguage : 'en';
    req.headers['accept-language'] = language;
    next();
  }
}
