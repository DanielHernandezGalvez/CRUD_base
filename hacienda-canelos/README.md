<?php

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u546093149_d51eO' );

/** Database username */
define( 'DB_USER', 'u546093149_SH5U0' );

/** Database password */
define( 'DB_PASSWORD', 'YFAK4qGetG' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'H@^Ozr<a<9Fgc/h1@o%ap+`JO[+!sIiNc45#%DQHv/ik^.^rr*k)XhcGthGHas}?' );
define( 'SECURE_AUTH_KEY',   'gC[T Ye0DpDd=bS-z+jj2D*~RbJk_mHfTsh;A~kcR9W;^0d<ixzchLbcsyCV~M9T' );
define( 'LOGGED_IN_KEY',     'gS77M`t+$yV`W6gOQ%sqBD*2uawe%~{/&HY5zM4+?0:HC!o v5IBeCxhJigjg~$e' );
define( 'NONCE_KEY',         'he]T0_soK4DM#fRIWwT@_Zw8Jg{8C/D:wy!h?w1{^qHk$Ghvn7i~@)2b<XAV9HXM' );
define( 'AUTH_SALT',         'pX%D>l-F0tfmKnv;Ver^)q*C*c;i/tDU&KOtPNGr_K.JkV_LQ#o&:|9M&|1*/fy[' );
define( 'SECURE_AUTH_SALT',  '_~~|>J#kl_yv}7sh}K{Te?f#~x2ah|:bXUy2?K[Aq<O;(z3-BqZ!#~]H(W.>Q1L,' );
define( 'LOGGED_IN_SALT',    '5oqQzN@K(Dx/1]-)`(FMM1{.8XovCT7]l/%J[T3@m({:R+d;>XcY]Tqq}TvbK4X7' );
define( 'NONCE_SALT',        '(u;sB,U+{l%/P@v{9.plG3#CV]kF rLo*y&tXpUJ=$r6-l^.96NAW?$y0XCXtDW(' );
define( 'WP_CACHE_KEY_SALT', '>2Vv r%e,U XaE(EL~VeKAmPa.GX;.P5oa@{?kfX&%#,bwbQ1CoJpap)%MZ$m+|[' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
