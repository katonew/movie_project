package controller.board;

import java.io.IOException;
import java.util.ArrayList;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import model.dto.board.SearchDto;

public class Search {


	public static ArrayList<SearchDto> search() throws IOException{
		
		
		ArrayList<SearchDto> list = new ArrayList<>();
		
		Document doc = Jsoup.connect("https://pedia.watcha.com/ko-KR").get();
			
        for (int i = 0; i < 10; i++) {
        	
        	Element title = doc.select(".css-lufi3b").select("[data-rowindex='0']").select(".css-5yuqaa").get(i);
            Element counts = doc.select(".css-lufi3b").select("[data-rowindex='0']").select(".css-u4moi6").get(i);

            String titleStr = title.text();
            String countStr = counts.text();
            System.out.println("title : "+titleStr);
            System.out.println("count : " + countStr);
            String link = doc.select(".css-lufi3b").select("[data-rowindex='0']").select(".css-8y23cj a").get(i).attr("abs:href");
            System.out.println("link : "+link);
            String pimg = doc.select(".css-lufi3b").select("[data-rowindex='0']").select(".ezcopuc0 img").get(i).attr("abs:src");
            System.out.println("pimg : "+ pimg);
            SearchDto dto = new SearchDto(titleStr, pimg, countStr, link);
            list.add(dto);
         }
        	for (int i = 0; i < 10; i++) {
        	
        	Element title = doc.select("[data-rowindex=2]").select(".css-5yuqaa").get(i);
        	System.out.println(title);
        	String titleStr = title.text();
           
            System.out.println("title : "+titleStr);
            
            String link = doc.select("[data-rowindex=2]").select(".css-8y23cj a").get(i).attr("abs:href");
            System.out.println("link : "+link);
            String pimg = doc.select("[data-rowindex=2]").select(".ezcopuc0 img").get(i).attr("abs:src");
            System.out.println("pimg : "+ pimg);
            SearchDto dto = new SearchDto(titleStr, pimg, " ", link);
            list.add(dto);
         }
        System.out.println(list.toString());
        return list;
	}

	
}

