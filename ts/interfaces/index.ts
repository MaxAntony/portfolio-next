export type IModal = { images: string[]; description: string; technicalDescription: string; linkLive: string };

export type IProject = {
  title: string;
  shortDescription: string;
  image: string;
  modal: IModal;
};
