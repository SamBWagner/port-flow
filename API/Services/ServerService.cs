using System.Diagnostics;

namespace API.Services;

public static class ServerService
{
    public static async Task<string> RunDeployScript()
    {
        // Get the current directory and build the absolute path
        var currentDirectory = Directory.GetCurrentDirectory();
        var scriptPath = Path.Combine(currentDirectory, "../deploy.sh");
        
        var startInfo = new ProcessStartInfo
        {
            FileName = "/bin/bash",
            Arguments = scriptPath,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            UseShellExecute = false,
            CreateNoWindow = true
        };

        using var process = new Process();
        process.StartInfo = startInfo;

        process.Start();

        var output = await process.StandardOutput.ReadToEndAsync();
        var errors = await process.StandardError.ReadToEndAsync();

        await process.WaitForExitAsync();

        if (process.ExitCode == 0)
        {
            Console.WriteLine("Output: " + output);
            return $"Success: {output}";
        }

        Console.WriteLine("Errors: " + errors);
        return $"Failure: {errors}";
    }    
}