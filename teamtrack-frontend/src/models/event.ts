export interface Event {
  id: Number;
  type: String;
  description: String;
  location: String;
  date: string;
  time: string;
}

export interface State {
  events: Event[];
}
