export enum LinkTypes {
    link = 'link',
    music = 'music',
    show = 'show'
  }

interface ISong {
    artist?: string;
    song?: string
}

export interface IShow {
    venue: string;
    city: string;
    date: string;
    ticketsAvailable: boolean
}

export interface IPlatform {
    icon: any;
    name: string;
    url: string;
}

export interface ILink {
    url: string;
    title: string;
    type: LinkTypes;
    song?: any;
    platforms?: IPlatform[];
    shows?: any[];
}
