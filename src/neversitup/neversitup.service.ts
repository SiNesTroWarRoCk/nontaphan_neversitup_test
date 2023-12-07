import { Injectable } from '@nestjs/common';

@Injectable()
export class NeversitupService {
    generatePermutations(inputVal:string): string[] {
        const result: string[] = [];

        function permute(str: string, current: string = ''): void {
            if (str.length === 0) {
                result.push(current);
                return;
            }

            for (let i = 0; i < str.length; i++) {
                const nextChar = str[i];
                const remainingChars = str.slice(0, i) + str.slice(i + 1);
                permute(remainingChars, current + nextChar);
            }
        }

        permute(inputVal);
        return Array.from(new Set(result)); 
    }

    findOddInt(inputVal: number[]): any{
        const countMap = new Map();

        for (const num of inputVal) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
        
        for (const [num, count] of countMap) {

            if (count % 2 !== 0) {
                return { result: num };
            }
        }

        return { result: null };
    }

    countSmileys(inputVal: string[]): any {       
        const validEyesArr = [':', ';'];
        const validNosesArr = ['-', '~'];
        const validMouthsArr = [')', 'D'];

        const isValidSmiley = (face) => {            
            if (face.length === 2) {
                return validEyesArr.includes(face[0]) && validMouthsArr.includes(face[1]);
            } else if (face.length === 3) {
                return (
                    validEyesArr.includes(face[0]) &&
                    validNosesArr.includes(face[1]) &&
                    validMouthsArr.includes(face[2])
                ); 
            }
            return false;
        };

        return { result : inputVal.filter(isValidSmiley).length};
        
    }
}
