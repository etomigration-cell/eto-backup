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
builder.Services.AddSingleton<AddressBookRepository>(provider =>
    new AddressBookRepository(connectionString)
);
builder.Services.AddSingleton<PlannedActionRepository>(provider =>
    new PlannedActionRepository(connectionString)
);
builder.Services.AddSingleton<WdynRepository>(provider =>
    new WdynRepository(connectionString)
);
builder.Services.AddSingleton<SearchParticipantRepository>(provider =>
    new SearchParticipantRepository(connectionString)
);
builder.Services.AddSingleton<LoginRepository>(provider =>
    new LoginRepository(connectionString)
);

builder.Services.AddSingleton<FamilyService>();
builder.Services.AddSingleton<ParticipantService>();
builder.Services.AddSingleton<SupportPeriodService>();
builder.Services.AddSingleton<ServiceActivitiesService>();
builder.Services.AddSingleton<DocumentService>();
builder.Services.AddSingleton<AddressBookService>();
builder.Services.AddSingleton<PlannedActionService>();
builder.Services.AddSingleton<WdynService>();
builder.Services.AddSingleton<SearchParticipantService>();
builder.Services.AddSingleton<LoginService>();

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
