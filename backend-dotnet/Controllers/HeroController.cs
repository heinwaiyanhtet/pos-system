using GraphQL.AspNet.Attributes;
using GraphQL.AspNet.Controllers;

public class HeroController : GraphController
{
    [QueryRoot]
    public Human Hero(string episode)
    {
        if(episode == "Empire")
        {
            return new Human()
            {
                Id = 1000,
                Name = "Han Solo",
                HomePlanet = "Corellia",
            };
        }
        
        else
        {
            return new Human()
            {
                Id = 1001,
                Name = "Luke SkyWalker",
                HomePlanet = "Tatooine",
            };
        }
    }
}

public class Human
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string HomePlanet { get; set; }
}