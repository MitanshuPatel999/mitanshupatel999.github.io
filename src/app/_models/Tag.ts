    export class Tag{
    static readonly ANGULAR=new Tag("Angular", "red");
    static readonly TYPESCRIPT=new Tag("TypeScript", "yellow");
    static readonly CSHARP=new Tag("C#", "green");
    static readonly PYTHON=new Tag("Python", "yellowgreen");
    static readonly JAVA=new Tag("Java", "cyan");
    static readonly JAVASCRIPT=new Tag("JavaScript", "orange");
    static readonly REACT=new Tag("React", "blue");
    static readonly SQL=new Tag("SQL", "gold");
    static readonly HTML=new Tag("HTML", "violet");
    static readonly FIREBASE=new Tag("Firebase", "gold");
    static readonly NODEJS=new Tag("NodeJS", "brown");
    static readonly ASPNET=new Tag("ASP.NET", "purple");
    static readonly AIML=new Tag("AI/ML", "darkred");
    static readonly ANDROID=new Tag("Android", "darkblue");




    private constructor(private readonly key: string, public readonly color: string){
    
    }
    
    toString(){
        return this.key;
    }
}