using API.Services;
using Microsoft.AspNetCore.HttpOverrides;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseHttpsRedirection();

app.UseForwardedHeaders( new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

app.MapGet("/", EndpointDataService.GetEndpointsString);

app.MapGet("/Health", () => "Server running.");


var appTask =  app.RunAsync();

EndpointDataService.GetEndpoints(app.Services);

await appTask;

