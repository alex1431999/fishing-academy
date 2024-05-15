/**
 * This file contains mock data for questions
 */
import type {Question} from 'fishing-academy-types'


export const questionsMockData: Question[] = [
    {
        id: '1',
        choices: [
            {id: '1', description: 'ja'},
            {id: '2', description: 'nein'},
            {
                id: '3',
                description: 'nur an einem Sonntag'
            }
        ],
        answer: '1',
        description: 'Ist nali ein Dorsch?'
    },
    {
        id: '2',
        choices: [
            {id: '4', description: 'ja'},
            {id: '5', description: 'nein'},
            {
                id: '6',
                description: 'nur an einem Samstag'
            }
        ],
        answer: '6',
        description: 'Ist schnelena eine Möwe?'
    }
]