export type Move = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: Array<VersionGroupDetails>;
};

type VersionGroupDetails = {
  level_learned_at: number;
  version_group: {
    name: string;
    url: string;
  };
  move_learn_method: {
    name: string;
    url: string;
  };
};
