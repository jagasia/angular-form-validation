class SuperClass{
      public int doIt(String str, Integer... data)throws Exception{
            String signature = "(String, Integer[])";
            System.out.println(str + " " + signature);
            return 1;
      }
}
public class Test extends SuperClass{
      public int doIt(String str, Integer... data){
            String signature = "(String, Integer[])";
            System.out.println("Overridden: " + str + " " +signature+data[0]);
            return 0;
      }
      public static void main(String... args) throws Exception{
            SuperClass sb = new Test();
            sb.doIt("hello", 3);
      }
}