https://images.unsplash.com/photo-1528344227352-9a704db46536?

ixlib=rb-0.3.5&
q=80&
fm=jpg&
crop=entropy&
cs=tinysrgb&
w=200&
fit=max&
ixid=eyJhcHBfaWQiOjI4MDgxfQ&
s=43bd5b7ccb084d02509622edafde135c

https://images.unsplash.com/photo-1528344227352-9a704db46536?
ixlib=rb-0.3.5&
q=80&
fm=jpg&
cs=tinysrgb&
ixid=eyJhcHBfaWQiOjI4MDgxfQ&
s=43bd5b7ccb084d02509622edafde135c



/*
* replace fit, crop, w, h params with their value from url along "&".
* then insert your own values.
*/
if (unsplashUrl.includes('fit=')) {
  unsplashUrl = unsplashUrl.replace(/&fit=[a-z]\w+/, '');
}

if (unsplashUrl.includes('&w=')) {
  unsplashUrl = unsplashUrl.replace(/&w=[0-9]\w+/, '');
}

if (unsplashUrl.includes('&h=')) {
  unsplashUrl = unsplashUrl.replace(/&h=[0-9]\w+/, '');
}

if (unsplashUrl.includes('&crop=')) {
  unsplashUrl = unsplashUrl.replace(/&crop=[a-z]\w+/, '');
}


https://images.unsplash.com/photo-1519336555923-59661f41bb45?h=224&w=224&fit=crop&crop=faces

unsplashUrl = unsplashUrl.replace(/&fit=[a-z]\w+/, '');
unsplashUrl = unsplashUrl.replace(/&w=[0-9]\w+/, '');
unsplashUrl = unsplashUrl.replace(/&h=[0-9]\w+/, '');
unsplashUrl = unsplashUrl.replace(/&crop=[a-z]\w+/, '');

unsplashUrl = unsplashUrl + '&h=224&w=224&fit=crop&crop=faces';