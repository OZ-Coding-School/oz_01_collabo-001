interface Ticket {
  id: string;
  title: string;
  description: string;
}

export type Tickets = Ticket[];

export type Column = {
  id: string;
  title: string;
  tickets: Tickets;
};

export type Columns = Column[];
