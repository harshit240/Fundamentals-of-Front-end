function removeItems()
{
	AddItem.remove(AddItem.selectedIndex)

}
function add()
{
	var opt = document.createElement('option')
	opt.text=ATC1.value + ATC2.value +ATC3.value +ATC4.value 
	opt.value=ATC1.value + ATC2.value +ATC3.value +ATC4.value 
	AddItem.add(opt)
}