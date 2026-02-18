import java.util.*;
public class PalindroneCheackerApp {
public static void main(String args[]){
    Scanner sc=new Scanner(System.in);
    System.out.println("enter any string");
    String s=sc.nextLine();
    String rev="";
    int i=0;
    for(i=s.length()-1; i>=0; i--){
        rev=rev + s.charAt(i);
    }
    if(s.equals(rev)){
        System.out.println("The String"+s+"is palindrome");
    }
    else{
        System.out.println("The String"+s+"is Not palindrome");
    }



}
}
