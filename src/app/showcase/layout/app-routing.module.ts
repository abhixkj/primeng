import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../pages/landing/landing.component';
import { AppMainComponent } from './app.main.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
};

const routes: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    {
        path: '',
        component: AppMainComponent,
        children: [
            { path: '', redirectTo: 'installation', pathMatch: 'full' },
            { path: 'installation', loadChildren: () => import('../pages/installation/installation.module').then((m) => m.InstallationModule) },
            { path: 'roadmap', loadChildren: () => import('../pages/roadmap/roadmap.module').then((m) => m.RoadmapModule) },
            { path: 'theming', loadChildren: () => import('../pages/theming/theming.module').then((m) => m.ThemingModule) },
            { path: 'icons', loadChildren: () => import('../pages/icons/icons.module').then((m) => m.IconsModule) },
            { path: 'accordion', loadChildren: () => import('../pages/accordion/accordiondemo.module').then((m) => m.AccordionDemoModule) },
            { path: 'avatar', loadChildren: () => import('../pages/avatar/avatardemo.module').then((m) => m.AvatarDemoModule) },
            { path: 'autocomplete', loadChildren: () => import('../pages/autocomplete/autocompletedemo.module').then((m) => m.AutoCompleteDemoModule) },
            { path: 'blockui', loadChildren: () => import('../pages/blockui/blockuidemo.module').then((m) => m.BlockUIDemoModule) },
            { path: 'badge', loadChildren: () => import('../pages/badge/badgedemo.module').then((m) => m.BadgeDemoModule) },
            { path: 'breadcrumb', loadChildren: () => import('../pages/breadcrumb/breadcrumbdemo.module').then((m) => m.BreadcrumbDemoModule) },
            { path: 'button', loadChildren: () => import('../pages/button/buttondemo.module').then((m) => m.ButtonDemoModule) },
            { path: 'calendar', loadChildren: () => import('../pages/calendar/calendardemo.module').then((m) => m.CalendarDemoModule) },
            { path: 'captcha', loadChildren: () => import('../pages/captcha/captchademo.module').then((m) => m.CaptchaDemoModule) },
            { path: 'card', loadChildren: () => import('../pages/card/carddemo.module').then((m) => m.CardDemoModule) },
            { path: 'cascadeselect', loadChildren: () => import('../pages/cascadeselect/cascadeselectdemo.module').then((m) => m.CascadeSelectDemoModule) },
            { path: 'carousel', loadChildren: () => import('../pages/carousel/carouseldemo.module').then((m) => m.CarouselDemoModule) },
            { path: 'chart', loadChildren: () => import('../pages/chart/chartdemo.module').then((m) => m.ChartDemoModule) },
            { path: 'checkbox', loadChildren: () => import('../pages/checkbox/checkboxdemo.module').then((m) => m.CheckboxDemoModule) },
            { path: 'chip', loadChildren: () => import('../pages/chip/chipdemo.module').then((m) => m.ChipDemoModule) },
            { path: 'chips', loadChildren: () => import('../pages/chips/chipsdemo.module').then((m) => m.ChipsDemoModule) },
            { path: 'codehighlighter', loadChildren: () => import('../pages/codehighlighter/codehighlighterdemo.module').then((m) => m.CodeHighlighterDemoModule) },
            { path: 'colorpicker', loadChildren: () => import('../pages/colorpicker/colorpickerdemo.module').then((m) => m.ColorPickerDemoModule) },
            { path: 'colors', loadChildren: () => import('../pages/colors/colorsdemo.module').then((m) => m.ColorsDemoModule) },
            { path: 'confirmdialog', loadChildren: () => import('../pages/confirmdialog/confirmdialogdemo.module').then((m) => m.ConfirmDialogDemoModule) },
            { path: 'confirmpopup', loadChildren: () => import('../pages/confirmpopup/confirmpopupdemo.module').then((m) => m.ConfirmPopupDemoModule) },
            { path: 'contextmenu', loadChildren: () => import('../pages/contextmenu/contextmenudemo.module').then((m) => m.ContextMenuDemoModule) },
            { path: 'dataview', loadChildren: () => import('../pages/dataview/dataviewdemo.module').then((m) => m.DataViewDemoModule) },
            { path: 'defer', loadChildren: () => import('../pages/defer/deferdemo.module').then((m) => m.DeferDemoModule) },
            { path: 'dialog', loadChildren: () => import('../pages/dialog/dialogdemo.module').then((m) => m.DialogDemoModule) },
            { path: 'dock', loadChildren: () => import('../pages/dock/dockdemo.module').then((m) => m.DockDemoModule) },
            { path: 'divider', loadChildren: () => import('../pages/divider/dividerdemo.module').then((m) => m.DividerDemoModule) },
            { path: 'dynamicdialog', loadChildren: () => import('../pages/dynamicdialog/dynamicdialogdemo.module').then((m) => m.DynamicDialogDemoModule) },
            { path: 'dragdrop', loadChildren: () => import('../pages/dragdrop/dragdropdemo.module').then((m) => m.DragDropDemoModule) },
            { path: 'dropdown', loadChildren: () => import('../pages/dropdown/dropdowndemo.module').then((m) => m.DropdownDemoModule) },
            { path: 'editor', loadChildren: () => import('../pages/editor/editordemo.module').then((m) => m.EditorDemoModule) },
            { path: 'fieldset', loadChildren: () => import('../pages/fieldset/fieldsetdemo.module').then((m) => m.FieldsetDemoModule) },
            { path: 'fileupload', loadChildren: () => import('../pages/fileupload/fileuploaddemo.module').then((m) => m.FileUploadDemoModule) },
            { path: 'floatlabel', loadChildren: () => import('../pages/floatlabel/floatlabeldemo.module').then((m) => m.FloatLabelDemoModule) },
            { path: 'filterservice', loadChildren: () => import('../pages/filterservice/filterservicedemo.module').then((m) => m.FilterServiceDemoModule) },
            { path: 'focustrap', loadChildren: () => import('../pages/focustrap/focustrapdemo.module').then((m) => m.FocusTrapDemoModule) },
            { path: 'fullcalendar', loadChildren: () => import('../pages/fullcalendar/fullcalendardemo.module').then((m) => m.FullCalendarDemoModule) },
            { path: 'galleria', loadChildren: () => import('../pages/galleria/galleriademo.module').then((m) => m.GalleriaDemoModule) },
            { path: 'gmap', loadChildren: () => import('../pages/gmap/gmapdemo.module').then((m) => m.GMapDemoModule) },
            { path: 'image', loadChildren: () => import('../pages/image/imagedemo.module').then((m) => m.ImageDemoModule) },
            { path: 'inplace', loadChildren: () => import('../pages/inplace/inplacedemo.module').then((m) => m.InplaceDemoModule) },
            { path: 'inputmask', loadChildren: () => import('../pages/inputmask/inputmaskdemo.module').then((m) => m.InputMaskDemoModule) },
            { path: 'inputnumber', loadChildren: () => import('../pages/inputnumber/inputnumberdemo.module').then((m) => m.InputNumberDemoModule) },
            { path: 'inputswitch', loadChildren: () => import('../pages/inputswitch/inputswitchdemo.module').then((m) => m.InputSwitchDemoModule) },
            { path: 'inputtext', loadChildren: () => import('../pages/inputtext/inputtextdemo.module').then((m) => m.InputTextDemoModule) },
            { path: 'inputgroup', loadChildren: () => import('../pages/inputgroup/inputgroupdemo.module').then((m) => m.InputGroupDemoModule) },
            { path: 'inputtextarea', loadChildren: () => import('../pages/inputtextarea/inputtextareademo.module').then((m) => m.InputTextareaDemoModule) },
            { path: 'invalid', loadChildren: () => import('../pages/invalid/invaliddemo.module').then((m) => m.InvalidDemoModule) },
            { path: 'i18n', loadChildren: () => import('../pages/i18n/i18n.module').then((m) => m.I18NModule) },
            { path: 'knob', loadChildren: () => import('../pages/knob/knobdemo.module').then((m) => m.KnobDemoModule) },
            { path: 'keyfilter', loadChildren: () => import('../pages/keyfilter/keyfilterdemo.module').then((m) => m.KeyFilterDemoModule) },
            { path: 'listbox', loadChildren: () => import('../pages/listbox/listboxdemo.module').then((m) => m.ListboxDemoModule) },
            { path: 'lts', loadChildren: () => import('../pages/lts/lts.module').then((m) => m.LTSModule) },
            { path: 'megamenu', loadChildren: () => import('../pages/megamenu/megamenudemo.module').then((m) => m.MegaMenuDemoModule) },
            { path: 'menu', loadChildren: () => import('../pages/menu/menudemo.module').then((m) => m.MenuDemoModule) },
            { path: 'menubar', loadChildren: () => import('../pages/menubar/menubardemo.module').then((m) => m.MenubarDemoModule) },
            { path: 'menumodel', loadChildren: () => import('../pages/menumodel/menumodeldemo.module').then((m) => m.MenuModelDemoModule) },
            { path: 'messages', loadChildren: () => import('../pages/messages/messagesdemo.module').then((m) => m.MessagesDemoModule) },
            { path: 'multiselect', loadChildren: () => import('../pages/multiselect/multiselectdemo.module').then((m) => m.MultiSelectDemoModule) },
            { path: 'orderlist', loadChildren: () => import('../pages/orderlist/orderlistdemo.module').then((m) => m.OrderListDemoModule) },
            { path: 'organizationchart', loadChildren: () => import('../pages/organizationchart/organizationchartdemo.module').then((m) => m.OrganizationChartDemoModule) },
            { path: 'overlaypanel', loadChildren: () => import('../pages/overlaypanel/overlaypaneldemo.module').then((m) => m.OverlayPanelDemoModule) },
            { path: 'paginator', loadChildren: () => import('../pages/paginator/paginatordemo.module').then((m) => m.PaginatorDemoModule) },
            { path: 'panel', loadChildren: () => import('../pages/panel/paneldemo.module').then((m) => m.PanelDemoModule) },
            { path: 'panelmenu', loadChildren: () => import('../pages/panelmenu/panelmenudemo.module').then((m) => m.PanelMenuDemoModule) },
            { path: 'password', loadChildren: () => import('../pages/password/passworddemo.module').then((m) => m.PasswordDemoModule) },
            { path: 'picklist', loadChildren: () => import('../pages/picklist/picklistdemo.module').then((m) => m.PickListDemoModule) },
            { path: 'progressbar', loadChildren: () => import('../pages/progressbar/progressbardemo.module').then((m) => m.ProgressBarDemoModule) },
            { path: 'progressspinner', loadChildren: () => import('../pages/progressspinner/progressspinnerdemo.module').then((m) => m.ProgressSpinnerDemoModule) },
            { path: 'radiobutton', loadChildren: () => import('../pages/radiobutton/radiobuttondemo.module').then((m) => m.RadioButtonDemoModule) },
            { path: 'rating', loadChildren: () => import('../pages/rating/ratingdemo.module').then((m) => m.RatingDemoModule) },
            { path: 'ripple', loadChildren: () => import('../pages/ripple/rippledemo.module').then((m) => m.RippleDemoModule) },
            { path: 'scrollpanel', loadChildren: () => import('../pages/scrollpanel/scrollpaneldemo.module').then((m) => m.ScrollPanelDemoModule) },
            { path: 'scrolltop', loadChildren: () => import('../pages/scrolltop/scrolltopdemo.module').then((m) => m.ScrollTopDemoModule) },
            { path: 'selectbutton', loadChildren: () => import('../pages/selectbutton/selectbuttondemo.module').then((m) => m.SelectButtonDemoModule) },
            { path: 'sidebar', loadChildren: () => import('../pages/sidebar/sidebardemo.module').then((m) => m.SidebarDemoModule) },
            { path: 'skeleton', loadChildren: () => import('../pages/skeleton/skeletondemo.module').then((m) => m.SkeletonDemoModule) },
            { path: 'slidemenu', loadChildren: () => import('../pages/slidemenu/slidemenudemo.module').then((m) => m.SlideMenuDemoModule) },
            { path: 'slider', loadChildren: () => import('../pages/slider/sliderdemo.module').then((m) => m.SliderDemoModule) },
            { path: 'speeddial', loadChildren: () => import('../pages/speeddial/speeddialdemo.module').then((m) => m.SpeedDialDemoModule) },
            { path: 'splitbutton', loadChildren: () => import('../pages/splitbutton/splitbuttondemo.module').then((m) => m.SplitButtonDemoModule) },
            { path: 'splitter', loadChildren: () => import('../pages/splitter/splitterdemo.module').then((m) => m.SplitterDemoModule) },
            { path: 'steps', loadChildren: () => import('../pages/steps/stepsdemo.module').then((m) => m.StepsDemoModule) },
            { path: 'support', loadChildren: () => import('../pages/support/support.module').then((m) => m.SupportModule) },
            { path: 'styleclass', loadChildren: () => import('../pages/styleclass/styleclassdemo.module').then((m) => m.StyleClassDemoModule) },
            { path: 'tag', loadChildren: () => import('../pages/tag/tagdemo.module').then((m) => m.TagDemoModule) },
            { path: 'table', loadChildren: () => import('../pages/table/tabledemo.module').then((m) => m.TableDemoModule) },
            { path: 'tabmenu', loadChildren: () => import('../pages/tabmenu/tabmenudemo.module').then((m) => m.TabMenuDemoModule) },
            { path: 'tabview', loadChildren: () => import('../pages/tabview/tabviewdemo.module').then((m) => m.TabViewDemoModule) },
            { path: 'terminal', loadChildren: () => import('../pages/terminal/terminaldemo.module').then((m) => m.TerminalDemoModule) },
            { path: 'tieredmenu', loadChildren: () => import('../pages/tieredmenu/tieredmenudemo.module').then((m) => m.TieredMenuDemoModule) },
            { path: 'timeline', loadChildren: () => import('../pages/timeline/timelinedemo.module').then((m) => m.TimelineDemoModule) },
            { path: 'toast', loadChildren: () => import('../pages/toast/toastdemo.module').then((m) => m.ToastDemoModule) },
            { path: 'togglebutton', loadChildren: () => import('../pages/togglebutton/togglebuttondemo.module').then((m) => m.ToggleButtonDemoModule) },
            { path: 'toolbar', loadChildren: () => import('../pages/toolbar/toolbardemo.module').then((m) => m.ToolbarDemoModule) },
            { path: 'tooltip', loadChildren: () => import('../pages/tooltip/tooltipdemo.module').then((m) => m.TooltipDemoModule) },
            { path: 'tree', loadChildren: () => import('../pages/tree/treedemo.module').then((m) => m.TreeDemoModule) },
            { path: 'treeselect', loadChildren: () => import('../pages/treeselect/treeselectdemo.module').then((m) => m.TreeSelectDemoModule) },
            { path: 'treetable', loadChildren: () => import('../pages/treetable/treetabledemo.module').then((m) => m.TreeTableDemoModule) },
            { path: 'tristatecheckbox', loadChildren: () => import('../pages/tristatecheckbox/tristatecheckboxdemo.module').then((m) => m.TriStateCheckboxDemoModule) },
            { path: 'virtualscroller', loadChildren: () => import('../pages/virtualscroller/virtualscrollerdemo.module').then((m) => m.VirtualScrollerDemoModule) },
            { path: 'accessibility', loadChildren: () => import('../pages/accessibility/accessibilitydemo.module').then((m) => m.AccessibilityDemoModule) },
            { path: 'scroller', loadChildren: () => import('../pages/scroller/scrollerdemo.module').then((m) => m.ScrollerDemoModule) },
            { path: 'uikit', loadChildren: () => import('../pages/uikit/uikit.module').then((m) => m.UIKitModule) },
            { path: 'autofocus', loadChildren: () => import('../pages/autofocus/autofocusdemo.module').then((m) => m.AutoFocusDemoModule) },
            { path: 'overlay', loadChildren: () => import('../pages/overlay/overlaydemo.module').then((m) => m.OverlayDemoModule) },
            { path: 'animate', loadChildren: () => import('../pages/animate/animatedemo.module').then((m) => m.AnimateDemoModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
