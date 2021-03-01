import { MoEventState, MoEventTopic } from "../enums";

export interface MoEventData {
    id?: string;
    name?: string;
    created?: string;
    title?: string;
    msg?: string;
    details?: string;
    state?: MoEventState;
    topic?: MoEventTopic;
}