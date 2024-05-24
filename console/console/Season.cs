using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace console
{
    public class Season
    {
        public int _id { get; set; }
        public int number_of_episodes { get; set; }
        public DateTime releasedate { get; set; }

        public static List<Season> LoadFromJson(string fileName) 
        {
            StreamReader sr = new StreamReader(fileName);
            string json = sr.ReadToEnd();
            return JsonSerializer.Deserialize<List<Season>>(json);
        
        }


    }
}
