package main;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class buffread {
	public static void main(String[]args) {
		BufferedReader br = null;
		try {
			String type;
			br=new BufferedReader(new InputStreamReader(System.in));
			System.out.println(br.readLine());
		} catch (Exception e) {
			
		}
	}
}
