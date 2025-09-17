using EtoApi.Services;
using EtoApi.DataAccess;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactFrontendPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

var connectionString = builder.Configuration.GetConnectionString("FabricWarehouse");

builder.Services.AddSingleton<FamilyRepository>(provider =>
    new FamilyRepository(connectionString)
);
builder.Services.AddSingleton<ParticipantRepository>(provider =>
    new ParticipantRepository(connectionString)
);
builder.Services.AddSingleton<SupportPeriodRepository>(provider =>
    new SupportPeriodRepository(connectionString)
);
builder.Services.AddSingleton<ServiceActivitiesRepository>(provider =>
    new ServiceActivitiesRepository(connectionString)
);
builder.Services.AddSingleton<DocumentsRepository>(provider =>
    new DocumentsRepository(connectionString)
);

builder.Services.AddSingleton<FamilyService>();
builder.Services.AddSingleton<ParticipantService>();
builder.Services.AddSingleton<SupportPeriodService>();
builder.Services.AddSingleton<ServiceActivitiesService>();
builder.Services.AddSingleton<DocumentService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("ReactFrontendPolicy");
app.UseHttpsRedirection();
app.MapControllers();

app.Run();
