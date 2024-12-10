import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { NotesService } from './notes.service';
import { PrismaService } from '../prisma/prisma.service'; // Імпортуємо PrismaService

@Controller('notes')
export class NotesController {
  constructor(
    private readonly notesService: NotesService,
    private readonly prisma: PrismaService,  // Додаємо PrismaService
  ) {}

  // Отримати всі нотатки
  @Get()
  async findAll() {
    return this.notesService.findAll();
  }

  // Отримати одну нотатку за id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  // Створити нову нотатку
  @Post()
  async create(@Body() note: { title: string; content: string }) {
    return this.notesService.create(note);
  }

  // Оновити нотатку за id
  @Put(':id')
  async update(@Param('id') id: string, @Body() updatedNote: { title?: string; content?: string }) {
    return this.notesService.update(+id, updatedNote);
  }

  // Видалити нотатку за id
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}

