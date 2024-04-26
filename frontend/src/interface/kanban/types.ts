interface Ticket {
  id: string;
  title: string;
  description: string;
  condition: string;
}

export type Tickets = Ticket[];

export type Column = {
  id: string;
  title: string;
  tickets: Tickets;
};

export interface Columns {
  todo: Ticket[];
  inProgress: Ticket[];
  qa: Ticket[];
  done: Ticket[];
}
