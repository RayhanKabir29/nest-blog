import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @IsString()
  @IsOptional()
  excerpt: string;

  @IsString()
  @IsOptional()
  coverImage: string;

  @IsString({ each: true })
  @IsOptional()
  tags: string[];

  @IsString({ each: true })
  @IsOptional()
  categories: string[];

  @IsString()
  @IsNotEmpty()
  author: string;
}
