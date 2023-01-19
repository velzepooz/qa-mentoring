interface ISomeDocumentAtMongoDb {
  name: string;
  order: number;
}

export class SomeDocumentAtMongoDb implements ISomeDocumentAtMongoDb {
  @Prop()
  name: string;

  @Prop()
  order: number;
}


export class SomeDocumentAtMongoDto implements ISomeDocumentAtMongoDb {
  @IsString()
  name: string;

  @IsInt()
  order: number;
}