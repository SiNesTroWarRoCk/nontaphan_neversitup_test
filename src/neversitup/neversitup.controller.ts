import { PermutationsDTO } from './dto/permutations.dto';
import { OddNumberDTO } from './dto/oddnumber.dto';
import { CountSmileysDTO } from './dto/countSmileysDTO.dto';
import { NeversitupService } from './neversitup.service';
import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('neversitup')
export class NeversitupController {
    constructor(private readonly neversitupService: NeversitupService) { }

    @Post('permutations')
    permutations(@Body() permutationsDTO: PermutationsDTO): string[] {
        const { inputVal } = permutationsDTO;

        if (!inputVal || typeof inputVal !== 'string') {
            throw new BadRequestException('Invalid input. Input should be string like "aabb" ');
        }

        let result: string[];

        result = this.neversitupService.generatePermutations(inputVal);

        return result;
    }

    @Post('odd-number')
    findOddInt(@Body() oddNumberDTO: OddNumberDTO): number[] {
        const { inputVal } = oddNumberDTO;
       
        if (!inputVal || typeof inputVal !== 'object') {
            throw new BadRequestException('Invalid input. Input should be object like [1,1,2]');
        }

        let result: number[];

        result = this.neversitupService.findOddInt(inputVal);

        return result;
    }
    @Post('count-smileys')
    countSmileys(@Body() countSmileysDTO: CountSmileysDTO): number {
        const { inputVal } = countSmileysDTO;
       
        if (!inputVal || typeof inputVal !== 'object') {
            throw new BadRequestException('Invalid input. Input should be object like [":)", ";(", ";}", ":-D"]');
        }

        let result: number;

        result = this.neversitupService.countSmileys(inputVal);

        return result;
    }
}
