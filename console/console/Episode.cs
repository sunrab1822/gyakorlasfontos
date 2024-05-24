using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace console
{
    public class Episode
    {
        public int _id { get; set; }
        public int season { get; set; }
        public int episode_in_season { get; set; }
        public string title { get; set; }
        public string directed_by { get; set; }
        public string written_by { get; set; }
        public string air_date { get; set; }
        public float us_viewers_in_millions { get; set; }

        public static List<Episode> LoadFromJson(string fileName)
        {
            StreamReader sr = new StreamReader(fileName);
            string json = sr.ReadToEnd();
            return JsonSerializer.Deserialize<List<Episode>>(json);

        }
    }
}
