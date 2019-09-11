using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server_csharp_mongodb.Models
{
  public class Project 
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id {get;set;}

    public string Name {get;set;}

    public string CreatedBy {get;set;}
  }
}