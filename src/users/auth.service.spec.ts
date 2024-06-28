import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersDbService } from './users-db.service';
import { User } from './users.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'; /////
import * as jwt from 'jsonwebtoken'; /////
  
describe('AuthService', () => {
	let authService: AuthService;
	let mockUsersService: Partial<UsersDbService>;
	
	beforeEach(async () => {
	mockUsersService = {
		findByEmail: () => Promise.resolve(undefined),
		create: (user: Partial<User>): Promise<User> =>
			Promise.resolve({
				...user,
				isAdmin: false,
				id: '904439a6-2e48-491a-a062-3fbd658c7a7e',
			} as User),
		};
		
		const mockJwtService = {
			sign: (payload) => jwt.sign(payload, 'testSecret'),
		};
		
		const module = await Test.createTestingModule({
			providers: [
				AuthService,
				{ provide: UsersDbService, useValue: mockUsersService },
				{ provide: JwtService, useValue: mockJwtService },
			],
		}).compile();
		
		authService = module.get<AuthService>(AuthService);
	});
	
	it('Create an instance of AuthService', () => {
		expect(authService).toBeDefined();
	});
	
	const mockUser: Partial<User> = {
		name: 'Test User 01',
		createdAt: '28/06/2024',
		password: 'aaBB33##',
		email: 'test01@ejemplo.com',
	};
	
	it('signUp() encripta contraseña al crear usuario', async () => {
		const bcryptPattern = /^\$2[aby]\$[0-9]{2}\$[./A-Za-z0-9]{53}$/;
		
		const user = await authService.signUp(mockUser as User);
		expect(user).toBeDefined();
		console.log({ user });
		expect(user.password).not.toEqual(mockUser.password);
		expect(bcryptPattern.test(user.password));
	});
	
	it('signIn() retorna objeto al loguearse', async () => {
		
		const mockUserVariant = { ...mockUser };
		mockUserVariant.password = await bcrypt.hash(
			mockUser.password as string,
			10,
		);
		
		mockUsersService.findByEmail = () =>
			Promise.resolve(mockUserVariant as User);
		
		const response = await authService.signIn(
			mockUser.email as string,
			mockUser.password as string,
		);
		
		expect(response).toBeDefined();
		expect(response.message).toBe('Usuario Logueado');
	});
	
});