// // auth.service.ts
// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { User } from '../entities/employee.entity';

// @Injectable()
// export class AuthService {
//   constructor(private jwtService: JwtService) {}

//   async validateUser(username: string, password: string): Promise<any> {
//     const user = await User.findOne({ where: { username } });
//     if (user && user.password === password) {
//       const { password, ...result } = user.toJSON();
//       return result;
//     }
//     return null;
//   }

//   async register(username: string, email: string, password: string): Promise<any> {
//     const hashedPassword = await bcrypt.hash(password, 10); // Hash password
//     return User.create({ username, email, password: hashedPassword });
//   }

//   async login(user: any) {
//     const payload = { username: user.username, sub: user.userId };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }