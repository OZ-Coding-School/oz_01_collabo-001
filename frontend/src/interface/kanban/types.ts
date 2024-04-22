interface User {
  name: string;
}

export type Ticket = {
  id: string;
  title: string;
  description: string;
  date: string;
  users: User[];
};

// type Tickets = Ticket[];

export type Column = {
  id: string;
  title: string;
  tickets: Ticket[];
};
