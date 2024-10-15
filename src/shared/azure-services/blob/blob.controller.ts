import { Body, Controller, Get , Header , Res , Query , Delete, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BlobService } from './blob.service';
import { CreateBlobDto } from './dto/create-blob.dto';
import { UpdateBlobDto } from './dto/update-blob.dto';

@Controller('blob')
export class BlobController {
  constructor(private readonly blobService: BlobService) {}
 
 
  @Post('upload')
  @UseInterceptors(FileInterceptor('myfile'))
  async upload(@UploadedFile() file: Express.Multer.File):Promise<string>{
    await this.blobService.upload(file);
    return " Your File Uploaded √√ ";
  }

  @Get('read-file')
  @Header('Content-Type','image/webp')
  async readImage(@Res() res,@Query('filename') filename){
    const file = await this.blobService.getfileStream(filename);
    return file.pipe(res);
  }

  @Get('delete-file')
    async delete(@Query('filename') filename){
    await this.blobService.delete(filename);
    return " Your File Deleted ";
    }

    @Get('download-file')
    @Header('Content-Type','image/webp')
    @Header('Content-Disposition', 'attachment; filename=file.webp')
    async downloadImage(@Res() res,@Query('filename') filename){
        const file = await this.blobService.getfileStream(filename);
        return file.pipe(res);
     }
}
