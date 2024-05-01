
/*Реализовать на языке TypeScript класс, описывающий html-элемент.
    Класс HtmlElement должен содержать внутри себя:
     название тега;
     самозакрывающийся тег или нет;
     текстовое содержимое;
     массив атрибутов;
     массив стилей;
     массив вложенных таких же тегов;
     метод для установки атрибута;
     метод для установки стиля;
     метод для добавления вложенного элемента в конец текущего элемента;
     метод для добавления вложенного элемента в начало текущего элемента;
     метод getHtml(), который возвращает html-код в виде строки, включая html-код вложенных элементов.
С помощью написанного класса реализовать следующий блок и добавить его на страницу с помощью document.write().*/
class HtmlElement {
                                        /*   название тега;
                                             самозакрывающийся тег или нет;
                                             текстовое содержимое;
                                        */
    constructor(private tagName: string, private tagBool: boolean, private tagText: string, private attributes?: Array<string>,

        private styles?: Array<string>, private nestedTags?: Array<HtmlElement>)
        {
            this.attributes = new Array<string>();  // массив атрибутов;

            this.styles = new Array<string>();  // массив стилей;

            this.nestedTags = new Array<HtmlElement>();     // массив вложенных таких же тегов;
        }    

    // метод для установки атрибута;
    public SetAttribute(attributeName: string, attributeValue: string): void
        {
            let atr = "";
            atr += attributeName + "=\"" + attributeValue + "\"";
            this.attributes.push(atr);        
        }

    // метод для установки стиля;
    public SetStyle(styleName: string, styleValue: string): void
        {
            let stl = styleName + ": " + styleValue + ";";
            this.styles.push(stl);
        }

    // метод для добавления вложенного элемента в конец текущего элемента;
    public AddElementToEnd(el: HtmlElement): void
        {
            this.nestedTags.push(el);
        }

    // метод для добавления вложенного элемента в начало текущего элемента;
    public AddElementToBegin(el: HtmlElement): void
        {
            this.nestedTags.unshift(el); 
        }

    // метод getHtml(), который возвращает html-код в виде строки, включая html-код вложенных элементов
    public getHTML(): string
        {
            let result = "";

            result += "<" + this.tagName + " ";
            if (this.attributes.length != 0) 
                for(let attr in this.attributes)
                    result += this.attributes[attr] + " ";           
        

            if (this.styles.length != 0)
            {  
                result += "style=\"";
                for(let stls in this.styles) 
                    result += this.styles[stls] + " ";
                                    
                result += "\"";
            }

            result += ">";        
            result += this.tagText;

            if (this.nestedTags.length != 0) 
                for (let nest in this.nestedTags)
                    result += this.nestedTags[nest].getHTML();

            if (this.tagBool == false)
                result += "</" + this.tagName + ">"
        
            return result;
        }
}

//С помощью написанного класса реализовать следующий блок и добавить его на страницу с помощью document.write().
let wrapper: HtmlElement = new HtmlElement("div", false, "");

wrapper.SetAttribute("id", "wrapper");

wrapper.SetStyle("display", "flex");

let div1: HtmlElement = new HtmlElement("div", false, "");

div1.SetStyle("width", "300px");

div1.SetStyle("margin", "10px");

let h3_1: HtmlElement = new HtmlElement("h3", false, "What is Lorem Ipsum?");

let img_1: HtmlElement = new HtmlElement("img", true, "");

img_1.SetAttribute("src", "lipsum.jpg");

img_1.SetAttribute("alt", "Lorem Ipsum");

img_1.SetStyle("width", "100%");

let p1: HtmlElement = new HtmlElement("p", false, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");

p1.SetStyle("text-align", "justify");

let a1: HtmlElement = new HtmlElement("a", false, "More..."); 

a1.SetAttribute("href", "https://www.lipsum.com");

a1.SetAttribute("target", "_blank");

let div2: HtmlElement = new HtmlElement("div", false, "");

div2.SetStyle("width", "300px");

div2.SetStyle("margin", "10px");

let h3_2: HtmlElement = new HtmlElement("h3", false, "What is Lorem Ipsum?");

let img_2: HtmlElement = new HtmlElement("img", true, "");

img_2.SetAttribute("src", "lipsum.jpg");

img_2.SetAttribute("alt", "Lorem Ipsum");

img_2.SetStyle("width", "100%");

let p2: HtmlElement = new HtmlElement("p", false, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");

p2.SetStyle("text-align", "justify");

let a2: HtmlElement = new HtmlElement("a", false, "More...");

a2.SetAttribute("href", "https://www.lipsum.com");

a2.SetAttribute("target", "_blank");

wrapper.AddElementToBegin(div1);

wrapper.AddElementToEnd(div2);

div1.AddElementToBegin(h3_1);

div1.AddElementToEnd(img_1);

div1.AddElementToEnd(p1);

p1.AddElementToEnd(a1);

div2.AddElementToBegin(h3_2);

div2.AddElementToEnd(img_2);

div2.AddElementToEnd(p2);

p2.AddElementToEnd(a2);

let str = wrapper.getHTML();

document.write(str);
