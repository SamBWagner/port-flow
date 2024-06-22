using System.Diagnostics;

namespace API.Services;

public static class ServerService
{
    public static void RunDeployScript()
    {
        const string scriptPath = "/var/www/port-flow/deploy.sh";

        var startInfo = new ProcessStartInfo
        {
            FileName = "/bin/bash",
            Arguments = "-l -c 'source ~/.bash_profile && " + scriptPath + "'",
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            UseShellExecute = false,
            CreateNoWindow = true
        };

        using var process = new Process();
        process.StartInfo = startInfo;

        process.Start();
    }
    
}