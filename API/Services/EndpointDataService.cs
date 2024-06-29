using System.Text;
using Microsoft.AspNetCore.Http.Metadata;

namespace API.Services;

public static class EndpointDataService
{
    private static List<Endpoint> Endpoints { get; set; } = [];
    
    public static void GetEndpoints(IServiceProvider serviceProvider)
    {
        Endpoints = serviceProvider
            .GetServices<EndpointDataSource>()
            .SelectMany(x => x.Endpoints)
            .ToList();
    }
    
    public static string GetEndpointsString()
    {
        var stringBuilder = new StringBuilder();

        stringBuilder.AppendLine("Welcome to the API!");
        stringBuilder.AppendLine("");
        stringBuilder.AppendLine("Available endpoints:");
        foreach (var endpoint in Endpoints)
        {
            stringBuilder.AppendLine($"{endpoint.Metadata.GetMetadata<IRouteDiagnosticsMetadata>()?.Route}");
        }
        
        return stringBuilder.ToString();
    }
}

