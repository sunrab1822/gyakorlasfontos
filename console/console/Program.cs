

using console;

List<Season> seasons = Season.LoadFromJson("seasons.json");
List<Episode> eps = Episode.LoadFromJson("episodes.json");

Console.WriteLine($"1. feladat: az epizodok száma: {eps.Count}");

List<Episode> theOneList = eps.Where(x => x.title.ToLower().Contains("the one")).ToList();

Console.WriteLine($"2.feladat: A 'The One' címet tartalmazóak: ");
foreach (Episode ep in theOneList)
{
    Console.WriteLine($"\t{ep.title}");
}


double maxDay = 0; 
Season s1 = null;
Season s2 = null;
for (int i = 0; i < seasons.Count-1; i++)
{
    double curDate =  Math.Floor((seasons[i+1].releasedate - seasons[i].releasedate).TotalDays);

    if (curDate > maxDay)
    {
        s1 = seasons[i];
        s2 = seasons[i+1];
        maxDay = curDate;
    }
}

Console.WriteLine($"3. fealadt: két évad között eltelt maximum idő: {maxDay}, a {s1._id} és a {s2._id} között volt");