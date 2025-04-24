type Subject = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
};

type Metadata = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
};

type TAllSubject = {
  message: string;
  metadata: Metadata;
  subjects: Subject[];
};

export type TUpdateSubject = {
  category: {
    _id: string;
    name: string;
    icon: string;
    createdAt: string;
  };
};
