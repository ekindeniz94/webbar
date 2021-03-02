import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MoEventState, MoEventTopic } from '../enums';
import { MoEventData } from '../interfaces';

export class MoEvent {
  id: string;
  name: string;
  created: string;
  title: string;
  msg: string;
  details: string;
  state: MoEventState;
  topic: MoEventTopic;

  constructor(data: MoEventData) {
    this.id = data.id ?? uuidv4();
    this.name = data.name ?? '';
    this.created = data.created ?? moment().format();
    this.title = data.title ?? '';
    this.msg = data.msg ?? '';
    this.details = data.details ?? '';
    this.state = data.state ?? MoEventState.UNKNOWN;
    this.topic = data.topic ?? MoEventTopic.UNKNOWN;
  }

  public getSerialized(): MoEventData {
    return {
      id: this.id,
      name: this.name,
      created: this.created,
      title: this.title,
      msg: this.msg,
      details: this.details,
      state: this.state,
      topic: this.topic
    };
  }
}
