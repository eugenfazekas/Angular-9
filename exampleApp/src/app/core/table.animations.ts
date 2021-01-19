import { trigger, style, state, transition, animate, group } from "@angular/animations";
import { getStylesFromClasses } from "./animationUtils";

const commonStyles = {
    border: "black solid 2px",
    color: "white"
}

export const HighlightTrigger = trigger("rowHighlight", [
    state("selected", style(getStylesFromClasses(["bg-success", "h2"]))),
    state("notselected", style(getStylesFromClasses("bg-info"))),
    state("void", style({
        transform: "translateX(-50%)"
    })),
    transition("* => notselected", animate("200ms")),
    transition("* => selected", animate("400ms 200ms ease-in")),
    transition("void => *", animate("500ms"))
]);

/*
export const HighlightTrigger = trigger("rowHighlight", [
    state("selected", style([commonStyles,{
        backgroundColor: "lightgreen",
        fontSize: "20px"
    }])),
    state("notselected", style([commonStyles,{
        backgroundColor: "lightsalmon",
        fontSize: "12px",
        color: "black"
    }])),
    state("void", style({
        transform:"translateX(-50%)"
        //opacity : 0
    })),
    transition("* => notselected", animate("200ms")),
    transition("* => selected",
         [animate("400ms 200ms ease-in", 
     style({
        backgroundColor: "lightblue",fontSize: "25px"
    })),
    group ([
        animate("250ms", style({
            backgroundColor: "lightcoral"
        })),
        animate("450ms", style({
            fontSize: "30px"
        })),
  ]),
    animate("200ms")]),
    transition("void => *", animate("500ms"))
]);
*/