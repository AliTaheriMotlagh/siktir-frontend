export interface CreateDokmeDto {
  url: string | null;
  title: string | null;
  description: string | null;
}

export interface DokmeDto {
  id: string;
  createdAt: Date;
  expiredAt: Date;
  url: string;
  title: string;
  description: string;
  siktirCount: number;
  userId: string;
}

export interface MetadataUrlDto {
  hostname: string;
  url: string;
  title: string;
  description: string;
  img: string;
  icon: string;
}
