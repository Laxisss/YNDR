/* eslint-disable prettier/prettier */
// import { Injectable, CanActivate, ExecutionContext, Module } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import * as jwt from 'jsonwebtoken';

// @Injectable()
// @Module({})
// export class JwtAuthGuard implements CanActivate {
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const authHeader = request.headers.authorization;

//     if (!authHeader) {
//       return false;
//     }

//     const [type, token] = authHeader.split(' ');

//     if (type.toLowerCase() !== 'bearer' || !token) {
//       return false;
//     }

//     try {
//       const secret = 'your_jwt_secret';
//       jwt.verify(token, secret);
//       return true;
//     } catch (err) {
//       return false;
//     }
//   }
// }
