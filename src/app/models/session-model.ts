import { Speaker } from './speaker-model';

export class Session{
    id: number;
    name: string;
    description: string;
    length: number;
    type: string;
    sessionSpeakers: Speaker[];
}