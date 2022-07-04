
export class FormModel {
 constructor(
  public estufas: string[],
   public clima: string[],
   public temperatura:number,
   public umidadeAR:number,
   public numeroPulso:number,
   public tempoPulso:number,
   public volInjetado:number,
   public volDrenado:number,
   public ecInjetado:number,
   public ecDrenado:number,
   public phDrenado:number,
   public phInjetado:number,
   public percDrenado:number,
   public data:Date,  
  ) {}
}


