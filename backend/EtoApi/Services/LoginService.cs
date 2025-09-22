using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

public class LoginService
{
    private readonly LoginRepository _userRepo;
    public LoginService(LoginRepository userRepo) => _userRepo = userRepo;

    public async Task<User?> AuthenticateAsync(string username, string password)
    {
        byte[] passwordHash;
        using (SHA512 sha = SHA512.Create())
        {
            passwordHash = sha.ComputeHash(Encoding.UTF8.GetBytes(password));
        }
        return await _userRepo.GetUserByUsernameAndPasswordHashAsync(username, passwordHash);
    }
}
