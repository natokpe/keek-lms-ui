import $       from 'jquery';
import Choices from "choices.js";

$(document).ready(function() {
    "use strict";

    // $('.navbar-nav-toggle').each(function (i, el) {
    //     $(this).on('click', function (e) {
    //         $('body').toggleClass('navbar-nav-active');
    //     });
    // });

    // $(window).on('scroll mousemove focus', function(e) {
    //     let $scr = $(window).scrollTop();

    //     if ($scr > 0) {
    //         $('body').addClass('page-scroll');
    //     } else {
    //         $('body').removeClass('page-scroll');
    //     }

    //     if ($scr >= 100) {
    //         $('body').addClass('page-scroll-100');
    //     } else {
    //         $('body').removeClass('page-scroll-100');
    //     }
    // });

    // $(".form-container-password").each(function (i, e)
    // {
    //     var ctrl    = $(this).find('.form-control');
    //     var tgl     = $(this).find('.form-container-password-toggle');
    //     var tglIcon = tgl.find('.icon');

    //     tgl.on('click', function (e)
    //     {
    //         if (ctrl.attr('type') == 'password') {
    //             ctrl.attr('type', 'text');
    //             tglIcon.removeClass('icon-eye').addClass('icon-eye-off');
    //         } else {
    //             ctrl.attr('type', 'password');
    //             tglIcon.removeClass('icon-eye-off').addClass('icon-eye');
    //         }
    //     });
    // });

    $("select.form-control").each(function (i, e)
    {
            // items: [],
            // choices: [],
            // maxItemCount: -1,

        let opts = {
            silent: false,
            renderChoiceLimit: -1,
            addChoices: false,
            addItems: true,
            // addItemFilter: (value) => !!value && value !== '',
            // removeItems: true,
            // removeItemButton: false,
            // removeItemButtonAlignLeft: false,
            // editItems: false,
            // allowHTML: false,
            // allowHtmlUserInput: false,
            // duplicateItemsAllowed: true,
            // delimiter: ',',
            // paste: true,
            searchEnabled: false,
            searchChoices: true,
            // searchFloor: 1,
            // searchResultLimit: 4,
            searchFields: [],
            // position: 'auto',
            // resetScrollPosition: true,
            shouldSort: false,
            shouldSortItems: false,
            // sorter: () => {...},
            // shadowRoot: null,
            // placeholder: true,
            // placeholderValue: null,
            // searchPlaceholderValue: null,
            // prependValue: null,
            // appendValue: null,
            // renderSelectedChoices: 'auto',
            // loadingText: 'Loading...',
            noResultsText: 'Not found',
            // noChoicesText: 'No choices to choose from',
            itemSelectText: '',
            // uniqueItemText: 'Only unique values can be added',
            // customAddItemText: 'Only values matching specific conditions can be added',
            addItemText: (value) => {
                return `Add <b>"${value}"</b>`;
            },
            // removeItemIconText: () => `Remove item`,
            removeItemLabelText: (value) => `Remove: ${value}`,
            // maxItemText: (maxItemCount) => {
            // return `Only ${maxItemCount} values can be added`;
            // },
            // valueComparer: (value1, value2) => {
            // return value1 === value2;
            // },
            // classNames: {
            // containerOuter: ['choices'],
            // containerInner: ['choices__inner'],
            // input: ['choices__input'],
            // inputCloned: ['choices__input--cloned'],
            // list: ['choices__list'],
            // listItems: ['choices__list--multiple'],
            // listSingle: ['choices__list--single'],
            // listDropdown: ['choices__list--dropdown'],
            // item: ['choices__item'],
            // itemSelectable: ['choices__item--selectable'],
            // itemDisabled: ['choices__item--disabled'],
            // itemChoice: ['choices__item--choice'],
            // description: ['choices__description'],
            // placeholder: ['choices__placeholder'],
            // group: ['choices__group'],
            // groupHeading: ['choices__heading'],
            // button: ['choices__button'],
            // activeState: ['is-active'],
            // focusState: ['is-focused'],
            // openState: ['is-open'],
            // disabledState: ['is-disabled'],
            // highlightedState: ['is-highlighted'],
            // selectedState: ['is-selected'],
            // flippedState: ['is-flipped'],
            // loadingState: ['is-loading'],
            // notice: ['choices__notice'],
            // addChoice: ['choices__item--selectable', 'add-choice'],
            // noResults: ['has-no-results'],
            // noChoices: ['has-no-choices'],
            // },
            // // Choices uses the great Fuse library for searching. You
            // // can find more options here: https://fusejs.io/api/options.html
            // fuseOptions: {
            // includeScore: true
            // },
            // labelId: '',
            // callbackOnInit: null,
            // callbackOnCreateTemplates: null,
            // appendGroupInSearch: false,
        };

        if ($(this).hasClass('allow-search')) {
            opts['searchEnabled'] = true;
            opts['searchFields']  = ['label', 'value'];
        }

        if ($(this).hasClass('sort')) {
            opts['shouldSort']      = true;
            opts['shouldSortItems'] = true;
        }

        const choices = new Choices(e, opts);
    });

    // $('body').removeClass(window.nowpt.splashscreenClass ?? 'splashscreen');
});
