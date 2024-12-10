import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.note.findMany();
  }

  async findOne(id: number) {
    return this.prisma.note.findUnique({
      where: { id },
    });
  }

  async create(note: { title: string; content: string }) {
    return this.prisma.note.create({
      data: note,
    });
  }

 
  async update(id: number, updatedNote: { title?: string; content?: string }) {
    return this.prisma.note.update({
      where: { id },
      data: updatedNote,
    });
  }

  
  async remove(id: number) {
    return this.prisma.note.delete({
      where: { id },
    });
  }
}

