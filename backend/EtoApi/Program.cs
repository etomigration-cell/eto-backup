using EtoApi.DataAccess;
using Azure.Identity;
using Microsoft.Data.SqlClient;
using EtoApi.Services;
using Microsoft.Extensions.DependencyInjection;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactFrontendPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:3000",
         "https://eto-migration-ui-faepfberdcamc7gz.australiaeast-01.azurewebsites.net")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

var connectionString = builder.Configuration.GetConnectionString("FabricWarehouse");

// Register SqlConnectionFactory that handles AAD token auth internally
builder.Services.AddSingleton<ISqlConnectionFactory, SqlConnectionFactory>();


// Register repositories to get ISqlConnectionFactory injected
builder.Services.AddTransient<FamilyRepository>();
builder.Services.AddTransient<ParticipantRepository>();
builder.Services.AddTransient<SupportPeriodRepository>();
builder.Services.AddTransient<ServiceActivitiesRepository>();
builder.Services.AddTransient<DocumentsRepository>();
builder.Services.AddTransient<AddressBookRepository>();
builder.Services.AddTransient<PlannedActionRepository>();
builder.Services.AddTransient<WdynRepository>();
builder.Services.AddTransient<SearchParticipantRepository>();
builder.Services.AddTransient<LoginRepository>();
builder.Services.AddTransient<AIHWFormRepository>();
builder.Services.AddTransient<BrokeragePaymentRepository>();
builder.Services.AddTransient<SafetyAlertsRepository>();
builder.Services.AddTransient<IncomingReferralRepository>();
builder.Services.AddTransient<MSURepository>();
builder.Services.AddTransient<ConsentRepository>();
builder.Services.AddTransient<ProfileRepository>();
builder.Services.AddTransient<TouchpointsRepository>();
builder.Services.AddTransient<DemographicsRepository>();
builder.Services.AddTransient<ProgramHistoryRepository>();
builder.Services.AddTransient<LotusInitialFormRepository>();
builder.Services.AddTransient<LotusNotesRepository>();
builder.Services.AddTransient<RedressRepository>();
builder.Services.AddTransient<RedressNotesRepository>();

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
builder.Services.AddSingleton<AIHWFormService>();
builder.Services.AddSingleton<SafetyAlertsService>();
builder.Services.AddSingleton<BrokeragePaymentService>();
builder.Services.AddSingleton<IncomingReferralService>();
builder.Services.AddSingleton<MSUService>();
builder.Services.AddSingleton<ConsentService>();
builder.Services.AddSingleton<ProfileService>();
builder.Services.AddSingleton<TouchpointsService>();
builder.Services.AddSingleton<ProgramHistoryService>();
builder.Services.AddSingleton<LotusInitialFormService>();
builder.Services.AddSingleton<LotusNotesService>();
builder.Services.AddSingleton<RedressService>();
builder.Services.AddSingleton<RedressNotesService>();

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
