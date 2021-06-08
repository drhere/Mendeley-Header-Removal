function removeitnow() {
	if (document.location.pathname.slice(0, 26) === "/reference-manager/reader/") {
		document.getElementsByClassName("LayoutHeader__LayoutHeaderWrapper-sc-10w9e0r-0 fuquJR")[0].style.display = "none";
		document.getElementsByClassName("LayoutReader__StyledLayoutReaderTabs-hfa6q5-1 esKTM")[0].style.height = "30px";
		document.getElementsByClassName("PDFReader__ToolbarContainer-lw5drr-0 eyJuWY")[0].style.height = "40px";
		document.getElementsByClassName("Toolbar__ToolbarWrapper-sc-1a01tg2-1 eZkODQ")[0].style.height = "40px";
		document.getElementsByClassName("LayoutReader-hfa6q5-0 cmrhXF")[0].style.height = "100%";
		document.getElementsByClassName("ReaderWithLayout__Container-z3zgjb-2 ggUUDz")[0].style.height = "100%"
	}
}

window.onload=function() { // when page has loaded
  setTimeout(function() { 
    console.log("🐱Mendeley Header Removal Extension just run!🐱");
    removeitnow();
		console.log('🐱Mendeley Header Removal Extension done!🐱');
  }, 3000); // insert after 3 seconds
}